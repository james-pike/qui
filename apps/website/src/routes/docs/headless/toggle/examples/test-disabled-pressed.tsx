import { component$, useStyles$ } from '@builder.io/qwik';
import { Toggle } from '@qwik-ui/headless';
import styles from '../snippets/toggle.css?inline';

export default component$(() => {
  useStyles$(styles);
  return (
    <div class="toggle-container">
      <Toggle disabled pressed class="toggle">
        Hello
      </Toggle>
    </div>
  );
});