import feedback_close from './feedback-close.svg';
import feedback_critical from './feedback-critical.svg';
import feedback_empty from './feedback-empty.svg';
import feedback_informational from './feedback-informational.svg';
import feedback_neutral from './feedback-neutral.svg';
import feedback_selected from './feedback-selected.svg';
import feedback_success from './feedback-success.svg';
import feedback_warning from './feedback-warning.svg';

export const V2_FEEDBACK_ICONS: { [char: string]: string } = {
  feedback_close,
  feedback_critical,
  feedback_empty,
  feedback_informational,
  feedback_neutral,
  feedback_selected,
  feedback_success,
  feedback_warning,
};

export const V2_FEEDBACK_ICON_NAMES: string[] = Object.keys(V2_FEEDBACK_ICONS);
