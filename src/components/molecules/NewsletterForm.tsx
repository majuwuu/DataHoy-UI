import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export function NewsletterForm() {
  return (
    <form className="space-y-3">
      <Input type="email" placeholder="Tu correo electrónico" />
      <Button>Suscribirse</Button>
    </form>
  );
}

export const editorMeta = {
  displayName: 'NewsletterForm',
};
