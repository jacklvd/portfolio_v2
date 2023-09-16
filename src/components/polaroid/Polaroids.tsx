/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback, useRef } from 'react';
import { client, urlFor } from "../../client/client";
import { motion } from "framer-motion";
import "../styles/polaroids.scss";

const isHTMLElement = (element: Element): element is HTMLElement => {
    return 'style' in element;
};

const Polaroids = () => {

    const [polaroids, setPolaroids] = useState<any[]>([]);
    const galleryRef = useRef<HTMLDivElement>(null);

    const getVal = (elem: HTMLElement, style: string) => parseInt(window.getComputedStyle(elem).getPropertyValue(style), 10);

    const getHeight = (item: HTMLElement | null) => {
        if (!item) return 0;
        const content = item.querySelector('.content');
        if (!content) return 0;
        return content.getBoundingClientRect().height;
    };

    const resizeGallery = useCallback(() => {
        const gallery = galleryRef.current;
        if (!gallery || !isHTMLElement(gallery)) return;

        const altura = getVal(gallery, 'grid-auto-rows');
        const gap = getVal(gallery, 'grid-row-gap');
        gallery.querySelectorAll('.gallery-item').forEach((item) => {
            if (!isHTMLElement(item)) return;
            const el = item;
            el.style.gridRowEnd = `span ${Math.ceil((getHeight(item) + gap) / (altura + gap))}`;
        });
    }, []);

    const handleImageLoad = useCallback(() => {
        resizeGallery();
    }, [resizeGallery]);

    useEffect(() => {
        client.fetch('*[_type == "gallery"]').then((data) => {
            setPolaroids(data);
            resizeGallery(); // Initial layout adjustment
        }).catch(console.error);
    }, [resizeGallery]);


    return (
        <section className='section polaroid_section' id="polaroid">
            <h2 className="section_title" style={{ color: "var(--title-color-dark)" }}>Polaroids Album</h2>
            <span className="section_subtitle">Some of my pictures</span>
            <div className='container gallery_container'>
                <div className='gallery' id='gallery' ref={galleryRef}>
                    {polaroids.map((polaroid: any, index) => (

                        <div key={index} className='gallery-item'>
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 2.4, delayChildren: 1 }}
                                className="gallery-item"
                            >
                                <div className='content'>
                                    <img src={urlFor(polaroid.images).url()} alt={polaroid.title} onLoad={handleImageLoad} />
                                    <figcaption className='img_caption'>{polaroid.date}</figcaption>
                                </div>
                            </motion.div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Polaroids;