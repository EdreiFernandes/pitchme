import Image from "next/image";
import profileImage from "../../../../public/profile.jpg";

export default function ProfileIcon() {
  // const profileImage =
  //   "https://instagram.fssz1-1.fna.fbcdn.net/v/t51.2885-19/457273399_556276503400669_3908025523554360294_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fssz1-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2AHOE347zDl9bfyR-jIAcmcc4rVvznom93ytM6ITX5cl7sxoAlvztUPcs_RCoXXKnpQ&_nc_ohc=nzbJQOCDeBcQ7kNvgHSiKHN&_nc_gid=27a1ae4a4617439280aec58e6243e0ce&edm=ACE-g0gBAAAA&ccb=7-5&oh=00_AYEhUu3PL2uoFK-YDAbddaeAVdB1r-o0VuWeE41_JXh4Fg&oe=67D565A1&_nc_sid=b15361"

  return (
    <div id="profileImage" className="items-center justify-items-center">
      <Image
        className="rounded-full aspect-square object-cover"
        src={profileImage}
        height={120}
        width={120}
        alt="Profile image"
      />
    </div>
  );
}
