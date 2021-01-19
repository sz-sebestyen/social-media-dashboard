import fb_icon from "./icons/facebook-square-brands.svg";
import tw_icon from "./icons/twitter-brands.svg";
import ig_icon from "./icons/instagram-brands.svg";
import yt_icon from "./icons/youtube-brands.svg";

function MapSocials(media) {
  const medias = {
    facebook: fb_icon,
    twitter: tw_icon,
    instagram: ig_icon,
    youtube: yt_icon,
  };
  return medias[media];
}

export default MapSocials;
