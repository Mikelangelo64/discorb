import initPaginationChanger from './dynamicPagination/init';
import makeSlider from './sliderHandler';
import Swiper from 'swiper';

export interface IInitializedSlider {
  name: string;
  slider: Swiper | undefined;
  isDynamicPagination?: boolean;
}

const sliderCasesInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.cases'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'cases',

      config: {
        allowTouchMove: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 28,
        // loop: true,

        breakpoints: {
          650: {
            slidesPerView: 2,
            slidesPerGroup: 1
          },
          996: {
            slidesPerView: 3,
            slidesPerGroup: 1
          }
        }

        // autoplay: {
        //   // delay: 2000,
        //   disableOnInteraction: false
        // }
      }
    });

    if (slider) {
      const info: IInitializedSlider = { name: `cases-${sliderIndex}`, slider };

      initPaginationChanger(info);

      // еще не обновляется состояния дайнемик - потом допилить
      sliders.push(info);
    }
  });
};

const sliderTeamInit = (sliders: Array<IInitializedSlider>) => {
  const containerArray = document.querySelectorAll(
    '.team'
  ) as NodeListOf<HTMLElement>;

  if (containerArray.length === 0) {
    return;
  }

  containerArray.forEach((item, sliderIndex) => {
    const slider = makeSlider({
      container: item,
      className: 'team',

      config: {
        allowTouchMove: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 28,
        // loop: true,

        breakpoints: {
          650: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          899: {
            slidesPerView: 3,
            slidesPerGroup: 3
          }
        }

        // autoplay: {
        //   // delay: 2000,
        //   disableOnInteraction: false
        // }
      }
    });

    if (slider) {
      const info: IInitializedSlider = { name: `team-${sliderIndex}`, slider };

      initPaginationChanger(info);

      // еще не обновляется состояния дайнемик - потом допилить
      sliders.push(info);
    }
  });
};

const slidersInit = () => {
  const sliders: Array<IInitializedSlider> = [];

  sliderCasesInit(sliders);
  sliderTeamInit(sliders);

  return sliders;
};

export default slidersInit;
