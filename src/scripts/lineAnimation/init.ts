import useObserver from '../config/useObserver';

const initLineAnimation = () => {
  const containerArray =
    document.querySelectorAll<HTMLElement>('.banner__content');
  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((container) => {
    const lineArray = container.querySelectorAll<HTMLElement>(
      '.banner__title .marked svg'
    );

    if (lineArray.length === 0) {
      return;
    }

    lineArray.forEach((line) => {
      useObserver({
        target: container,
        callbackIn: () => {
          line.classList.add('showed');
        },
        isCallOnce: true
      });
    });
  });
};

export default initLineAnimation;
