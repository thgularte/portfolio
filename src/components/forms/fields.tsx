import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
export function FormField({
  id,
  label,
  icon,
  error,
  children,
}: {
  id: string;
  label: string;
  icon: ReactNode;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-2 text-lg">
        {icon}
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-base text-soft">
          {error}
        </p>
      )}
    </div>
  );
}
export function TextInput({
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`field-input ${className}`} />;
}
export function TextArea({
  className = "",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`field-input min-h-25 resize-y ${className}`}
    />
  );
}
