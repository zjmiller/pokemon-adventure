module.exports = function (tileId) {
  switch (tileId) {
    case 176:
      return {
        left: false,
        up: false,
        right: false,
        down: false,
      };

    case 177:
      return {
        left: false,
        up: false,
        right: false,
        down: false,
      };

    case 207:
      return {
        left: false,
        up: false,
        right: false,
        down: false,
      };

    case 743:
      return {
        left: true,
        up: false,
        right: true,
        down: true,
      };

    case 1131:
      return {
        left: true,
        up: false,
        right: true,
        down: true,
      };

    case 1132:
      return {
        left: true,
        up: false,
        right: true,
        down: true,
      };

    case 1160:
      return {
        left: false,
        up: false,
        right: false,
        down: false,
      };

    case 1161:
      return {
        left: true,
        up: true,
        right: false,
        down: false,
      };

    case 1162:
      return {
        left: true,
        up: true,
        right: true,
        down: false,
      };

    // transparent tile
    case 1862:
      return {
        left: true,
        up: true,
        right: true,
        down: false,
      };

    case 1190:
      return {
        left: true,
        up: true,
        right: true,
        down: false,
      };

    case 2606:
      return {
        left: true,
        up: false,
        right: true,
        down: true,
      };

    case 2607:
      return {
        left: true,
        up: false,
        right: true,
        down: true,
      };

    case 2633:
      return {
        left: false,
        up: false,
        right: false,
        down: false,
      };

    case 2634:
      return {
        left: false,
        up: false,
        right: false,
        down: false,
      };

    case 2635:
      return {
        left: false,
        up: false,
        right: false,
        down: false,
      };

    case 2636:
      return {
        left: true,
        up: true,
        right: true,
        down: false,
      };

    case 2637:
      return {
        left: true,
        up: true,
        right: true,
        down: false,
      };

    default:
      return {
        left: true,
        up: true,
        right: true,
        down: true,
      }
  }
}
