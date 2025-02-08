import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";

const categories = ["Path", "Levo", "3d Printing", "Takt", "Other"];

const pathImages = [
  {
    id: "7",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_5792.jpeg",
  },
  {
    id: "9",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_5682.jpeg",
  },
  {
    id: "10",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_5196.jpeg",
  },
  {
    id: "5",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_5953.jpeg",
  },
  {
    id: "6",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_5795.jpeg",
  },
  {
    id: "4",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_6263.jpeg",
  },
  {
    id: "11",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_6701.jpeg",
  },
  {
    id: "12",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_6698.jpeg",
  },
  {
    id: "13",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_6710.jpeg",
  },
  {
    id: "28",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_7089.jpeg",
  },
  {
    id: "29",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_7103.jpeg",
  },
  {
    id: "30",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_5081.jpeg",
  },
  {
    id: "31",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_5053.jpeg",
  },
  {
    id: "32",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_8728.jpeg",
  },
];

const levoImages = [
  {
    id: "1",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_6450.jpeg",
  },
  {
    id: "2",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_6447.jpeg",
  },
  {
    id: "3",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/SLAM+(1).gif",
  },
  {
    id: "4",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_5593.jpeg",
  },
  {
    id: "5",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_5599.jpeg",
  },
  {
    id: "6",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_5646.jpeg",
  },
];

const otherImages = [
  {
    id: "7",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_8729.jpeg",
  },
  {
    id: "8",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_8726.jpeg",
  },
  {
    id: "9",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_8727.jpeg",
  },
  {
    id: "10",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_8575.png",
  },
  {
    id: "11",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_8631.jpeg",
  },
  // {
  //   id: "12",
  //   src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_8544.jpeg",
  // },
  {
    id: "13",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_7953.jpeg",
  },
  {
    id: "14",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_7839.jpeg",
  },
  {
    id: "16",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_7955.jpeg",
  },
  {
    id: "17",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/site_1.jpeg",
  },
  {
    id: "18",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/site_2.jpeg",
  },
  // {
  //   id: "21",
  //   src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/site_5.jpeg",
  // },
  {
    id: "22",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/site_6.jpeg",
  },
  {
    id: "23",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/site_7.jpg",
  },
  // {
  //   id: "24",
  //   src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/site_8.jpg",
  // },
  {
    id: "25",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/site_15.png",
  },
  {
    id: "26",
    src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/site_12.jpeg",
  },
  // {
  //   id: "18",
  //   src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_8525.jpeg",
  // },
  // {
  //   id: "19",
  //   src: "https://siteassetsinfo.s3.us-east-1.amazonaws.com/IMG_8547.png",
  // },
];

export const metadata: Metadata = {
  title: "Photos | Tim Hodgson",
  metadataBase: new URL("https://timtech.app/photos"),
  description: "Explore photos taken by Tim Hodgson",
  openGraph: {
    title: "Photos | Tim Hodgson",
    url: "https://timtech.app/photos",
    description: "Explore photos taken by Tim Hodgson",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692635149/victoreke/photos.png",
  },
};

export default function Photos() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading title="Path Photos" description="" />
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {pathImages.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="playing guitar"
              width={350}
              height={800}
              className="dark:bg-primary-bg bg-secondary-bg"
            />
          ))}
        </Slide>
      </figure>
      <div className="mt-2">
        <PageHeading title="Levo Photos" description="" />
        <figure className="my-6">
          <Slide delay={0.12} className="flex flex-wrap gap-2">
            {levoImages.map((image) => (
              <Image
                key={image.id}
                src={image.src}
                alt="playing guitar"
                width={350}
                height={800}
                className="dark:bg-primary-bg bg-secondary-bg"
              />
            ))}
          </Slide>
        </figure>
      </div>
      <div className="mt-2">
        <PageHeading title="Other Photos" description="" />
        <figure className="my-6">
          <Slide delay={0.12} className="flex flex-wrap gap-2">
            {otherImages.map((image) => (
              <Image
                key={image.id}
                src={image.src}
                alt="playing guitar"
                width={350}
                height={800}
                className="dark:bg-primary-bg bg-secondary-bg"
              />
            ))}
          </Slide>
        </figure>
      </div>
    </main>
  );
}
