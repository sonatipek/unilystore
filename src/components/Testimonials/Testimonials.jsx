import React from "react";
import TestimonialItem from "./TestimonialItem";
import { PiHandSwipeRight, PiHandSwipeLeft } from "react-icons/pi";

const testimonialsContent = [
  {
    name: "Eren K.",
    comment:
      "E-ticaret dünyasında aradığım her şeyi buldum! Ürün çeşitliliği harika, hızlı kargo ve mükemmel müşteri hizmetleri. Kesinlikle tavsiye ederim!",
    rate: 5,
  },
  {
    name: "Onur A.",
    comment:
      "Fiyatlar uygun ve kampanyalar sürekli güncelleniyor. Ancak, bazen kargo süresi biraz uzun olabiliyor. Yine de genel olarak memnunum.",
    rate: 4,
  },
  {
    name: "Ayşe G.",
    comment:
      "Siparişim sorunsuz bir şekilde geldi ve ürün kalitesi beklentilerimin üzerindeydi. Teşekkür ederim, bir daha alışveriş yapacağım!",
    rate: 5,
  },
  {
    name: "Zeynep Y.",
    comment:
      "Ürün açıklamaları bazen eksik olabiliyor. Aldığım ürün, resimde göründüğü kadar iyi değildi. Daha detaylı açıklamalar bekliyorum.",
    rate: 3,
  },
  {
    name: "Umut A.",
    comment:
      "Müşteri hizmetleri ekibi çok yardımcı oldu. Bir sorun yaşadım ve hızla çözüme kavuşturdular. İyi bir deneyim yaşadım.",
    rate: 4,
  },
  {
    name: "Fatma T.",
    comment:
      "Harika bir alışveriş deneyimi yaşadım. Sitede gezinmek çok kolay ve ödeme seçenekleri çeşitli. Ürünler de kaliteli. Herkese tavsiye ederim",
    rate: 5,
  },
];

function Testimonials() {
  return (
    <section className="px-4">
      <h1 className="text-4xl text-indigo-950 font-bold text-center mt-24 mb-6">
        Müşterilerimize Kulak Verin
      </h1>

      <ul className="container mx-auto flex flex-row gap-6 scroll-mx-6 snap-x snap-mandatory overflow-x-auto scroll-smooth">
        {testimonialsContent.map((testimonial, index) => (
          <TestimonialItem key={index} testimonialContent={testimonial} />
        ))}
      </ul>
      <div className="container mx-auto px-4 flex items-center justify-around mt-1 mb-12 md:hidden">
        <PiHandSwipeLeft className="size-8 animate-[pulse_3s_ease-in-out_infinite]" />
        <PiHandSwipeRight className="size-8 animate-[pulse_3s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}

const MemoizedTestimonials = React.memo(Testimonials);

export default MemoizedTestimonials;