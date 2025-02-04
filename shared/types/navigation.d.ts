import type { RouterLinkProps } from 'vue-router';

export interface Navigation extends Pick<RouterLinkProps, 'to'> {
  text: string;
}
