import { expect, test } from "@playwright/test";

test("URLs antigas redirecionam para as páginas em português", async ({
  request,
  baseURL,
}) => {
  for (const [oldPath, newPath] of [
    ["/experiences", "/experiencias"],
    ["/projects", "/projetos"],
    ["/about", "/sobre-mim"],
    ["/contact", "/contato"],
  ]) {
    const response = await request.get(oldPath, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(new URL(response.headers().location, baseURL).pathname).toBe(
      newPath,
    );
  }
});

test("conteúdo do portfólio anterior aparece na nova estrutura", async ({
  page,
}) => {
  await page.goto("/projetos");
  await expect(
    page.getByRole("heading", { name: "Atividade no GitHub" }),
  ).toBeVisible();
  await expect(
    page.locator("#siapreps").getByText("// Contexto"),
  ).toBeVisible();
  await expect(page.locator("#siapreps").getByText("// Impacto")).toBeVisible();
  await expect(
    page.locator("#siapreps").getByText("// Destaques"),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Abrir perfil no GitHub" }),
  ).toBeVisible();

  await page.goto("/sobre-mim");
  await expect(page.getByRole("heading", { name: "Hobbies" })).toBeVisible();
  await expect(
    page.getByText("Sport Club Internacional", { exact: false }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Diversão" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Curiosidades & Mini-projetos" }),
  ).toBeVisible();
});

test("foto alternativa aparece com mouse e foco", async ({ page }) => {
  await page.goto("/");
  const portrait = page.getByRole("button", {
    name: /Foto de Theodor Gularte/,
  });
  const primary = portrait.locator("img").first();
  const secondary = portrait.locator("img").last();
  await expect(primary).toHaveCSS("opacity", "1");
  await expect(secondary).toHaveCSS("opacity", "0");
  await portrait.hover();
  await expect(primary).toHaveCSS("opacity", "0");
  await expect(secondary).toHaveCSS("opacity", "1");
  await page.mouse.move(0, 0);
  await portrait.focus();
  await expect(secondary).toHaveCSS("opacity", "1");
});
