export default function (tileId) {
  const playerIsHiddenBehindTilesWithFollowingIds = [
    404, 405, 432, 433, 434, 435, 462, 463,
    710, 713, 740, 743, 770,
    1130, 1131, 1132,
    1340, 1370,
    2096,
    2125, 2126,
    2327, 2357,
    2603, 2604, 2606, 2607,
  ];
  return playerIsHiddenBehindTilesWithFollowingIds.indexOf(tileId) > -1;
}
