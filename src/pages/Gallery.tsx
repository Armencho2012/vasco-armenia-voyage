import { useState } from "react";
import { X } from "lucide-react";
import ship1 from "@/assets/ship1.jpg";
import spices from "@/assets/spices.jpg";
import compass from "@/assets/compass.jpg";
import portrait from "@/assets/portrait.jpg";
import voyageMap from "@/assets/voyage-map.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: ship1, title: "Պորտուգալական նավ", description: "15-րդ դարի նավը, որով ճամփորդեցին դա Գաման և նրա թիմը" },
    { src: spices, title: "Համեմունքների շուկա", description: "Հնդկական համեմունքները, որոնք էին հայտնագործության հիմնական նպատակը" },
    { src: compass, title: "Նավիգացիոն գործիքներ", description: "Կողմնացույց և քարտեզներ՝ նավարկության համար" },
    { src: portrait, title: "Դիմանկար", description: "Վասկո դա Գամայի պատկերացված պատկեր" },
    { src: voyageMap, title: "Ուղեծրության քարտեզ", description: "Պորտուգալիայից Հնդկաստան տանող ուղին" },
    { src: heroBanner, title: "Ծովային արկածախնդրություն", description: "Նավը հանգստ օվկիանոսում մայրամուտի ժամանակ" }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
          Նկարների պատկերասրահ
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-12 animate-fade-in">
          Պատմական պատկերներ և արվեստագիտական ​​ներկայացումներ
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {images.map((image, index) => (
            <div
              key={index}
              className="card-elegant p-4 cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover smooth-transition group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{image.title}</h3>
              <p className="text-muted-foreground text-sm">{image.description}</p>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary smooth-transition"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
