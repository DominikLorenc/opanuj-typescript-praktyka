import { TextProps } from './BaseText';

function rainbowText(text: string) {
  return text.split('').map((char: string, index: number) => {
    const hue = Math.floor((index / text.length) * 360);
    return (
      <span key={index} style={{ color: `hsl(${hue}, 80%, 50%)` }}>
        {char}
      </span>
    );
  });
}

export default function <P extends TextProps>(Component: React.ComponentType<P>) {
  return function Rainbow(props: P) {
    const text = typeof props.text === 'string' ? props.text : null;

    if (text) {
      const preparedColorText = rainbowText(text);

      return (
        <span data-testid="rainbow">
          <Component {...props} text={preparedColorText}></Component>;
        </span>
      );
    }

    return <Component {...props} />;
  };
}
