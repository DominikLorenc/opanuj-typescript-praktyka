import { TextProps } from './BaseText';

export default function withItalics<P extends TextProps>(Component: React.ComponentType<P>) {
  return function Italic(props: P) {
    return (
      <i data-testid="italic">
        <Component {...props} />;
      </i>
    );
  };
}
