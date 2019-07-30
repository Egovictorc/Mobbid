import React from 'react';

///IMPORTING IMAGES
import Community1x from "../../../images/community@1x.png";
import Community2x from "../../../images/community@2x.png";

import Ride1x from "../../../images/Schedule a ride@1x.png";
import Ride2x from "../../../images/Schedule a ride@2x.png";
import Pair1x from "../../../images/agreement@1x.png";
import Pair2x from "../../../images/agreement@2x.png";
import EnjoyRide1x from "../../../images/relaxation@1x.png";
import EnjoyRide2x from "../../../images/relaxation@2x.png";

// const Community1x = React.lazy( ()=> import('../../../../images/community@1x.png'))
// const Community2x = React.lazy( ()=> import('../../../../images/community@2x.png'));
// const Ride1x = React.lazy( ()=> import('../../../../images/Schedule a ride@1x.png'))
// const Ride2x = React.lazy( ()=> import('../../../../images/Schedule a ride@2x.png'));
// const Pair1x = React.lazy( ()=> import("../../../../images/agreement@1x.png"));
// const Pair2x = React.lazy( ()=> import("../../../../images/agreement@2x.png"));
// const EnjoyRide1x = React.lazy( ()=> import("../../../../images/relaxation@1x.png"));
// const EnjoyRide2x = React.lazy( ()=> import("../../../../images/relaxation@1x.png"));


let WorksData = [
  {
    className: "work__div work__community",
    article: {
      className: "work__article article",
      heading: {
        className: "work__article--heading article__heading",
        content: "join a community of commuters"
      },
      paragraph: {
        className: "work__article--par article__par",
        content:
          "download the market app and get matched with exciting people going your way, either to work or for short distance travel"
      }
    },
    imageContainer: {
      className: "work__img--container",
      lazyload: {
        height: 150,
        offset: 300,
        debounce: false,
        image: {
          className: "work__img",
          srcSet: `${Community2x} 1048w, ${Community1x} 524w`,
          sizes: "(min-width: 550px), (max-width: 549px)",
          src: Community1x,
          alt: "Mobbid Community"
        }
      }
    }
  },
  /* SCHEDLUE A RIDE */
  {
    className: "work__div section__ride ride",
    article: {
      className: "work__article article",
      heading: {
        className: "work__article--heading article__heading",
        content: "schedule a ride"
      },
      paragraph: {
        className: "work__article--par article__par",
        content:
          "with your work and home location preset, choose preferred time and get matched with a commuter close to you."
      }
    },
    imageContainer: {
      className: "work__img--container ride__img--container work__order--0",
      lazyload: {
        height: 150,
        offset: 300,
        debounce: false,
        image: {
          className: "work__img",
          srcSet: `${Ride2x} 760w, ${Ride1x} 380w`,
          sizes: "(min-width: 550px), (max-width: 549px)",
          src: Ride1x,
          alt: "Mobbid Ride"
        }
      }
    }
  },

  /* GET PAIRED */
  {
    className: "work__div pair__community",
    article: {
      className: "work__article article",
      heading: {
        className: "work__article--heading article__heading",
        content: "get paired"
      },
      paragraph: {
        className: "work__article--par article__par",
        content:
          "mobbid would help you select from a pool of available commuters going your way"
      }
    },
    imageContainer: {
      className: "work__img--container work__img--container",
      lazyload: {
        height: 150,
        offset: 300,
        debounce: false,
        image: {
          className: "work__img",
          srcSet: `${Pair2x} 566w, ${Pair1x} 283w`,
          sizes: "(min-width: 550px), (max-width: 549px)",
          src: Pair1x,
          alt: "Mobbid Pair"
        }
      }
    }
  },
  /* ENJOY THE RIDE */
  {
    className: "work__div section__enjoy-ride enjoy-ride",
    article: {
      className: "work__article article",
      heading: {
        className: "work__article--heading article__heading",
        content: "relax and enjoy the ride"
      },
      paragraph: {
        className: "work__article--par article__par",
        content:
          "it's always fun to ride with mobbid, meet new friends and have a great discussion"
      }
    },
    imageContainer: {
      className: "work__img--container enjoy-ride__img--container work__order--0",
      lazyload: {
        height: 150,
        offset: 300,
        debounce: false,
        image: {
          className: "work__img",
          srcSet: `${EnjoyRide2x} 600w, ${EnjoyRide1x} 300w`,
          sizes: "(min-width: 550px), (max-width: 549px)",
          src: EnjoyRide1x,
          alt: "Mobbid enjoy-ride"
        }
      }
    }
  }
];

  export default WorksData;