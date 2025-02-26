import { TextProps } from './BaseText';

export default function withBold<P extends TextProps>(Component: React.ComponentType<P>) {
  return function Bold(props: P) {
    return <b data-testid="bold">{<Component {...props} />}</b>;
  };
}
