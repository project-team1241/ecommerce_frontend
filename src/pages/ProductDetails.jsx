import React from 'react'
import { useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import ImageMagnifier from '../components/ProductDetails/ImageMagnifier'
import ImageSlider from '../components/ProductDetails/ImageSlider'
import { mockProducts } from '../Utils/mocks/productMock'
import { toast } from 'react-hot-toast'

const ProductDetails = () => {
    const { id } = useParams();
    // pick product from mock data
    const product = useMemo(() => mockProducts.find(p => p.id === id) || mockProducts[0], [id]);

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
    const [zoomBgPos, setZoomBgPos] = useState('center');
    const [isHovering, setIsHovering] = useState(false);
    const externalZoom = 2.5; // stronger zoom for the right-side panel

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error('Please select a size');
            return;
        }
        toast.success('Added to cart');
    }

    const handleBuyNow = () => {
        if (!selectedSize) {
            toast.error('Please select a size');
            return;
        }
        toast('Proceeding to buy...', { icon: '🛒' });
    }

    if (!product) return <div className="p-4">Product not found</div>

    return (
        <div className="w-full bg-gray-50 h-[100vh]">
            <div className="mx-14 mx-auto p-3 md:p-4 grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
                {/* Left: Gallery (Slider for < lg) */}
                <div className="lg:hidden bg-white rounded-md border p-2">
                    <ImageSlider images={product.images} index={activeIndex} onChange={setActiveIndex} />
                    {/* Action buttons for mobile/tablet */}
                    <div className="flex gap-2 mt-3">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md shadow"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={handleBuyNow}
                            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md shadow"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* Left: Gallery (Desktop - Thumbs + Magnifier from lg) */}
                <div className="hidden lg:grid lg:col-span-5 xl:col-span-4 bg-white rounded-md border p-2 grid-cols-[60px_minmax(0,1fr)] gap-2">
                    {/* Thumbnails - vertical like Flipkart */}
                    <div className="flex flex-col gap-2 overflow-y-auto max-h-[360px] pr-1">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-[56px] h-[56px] border rounded-md overflow-hidden flex items-center justify-center hover:border-blue-500 transition ${activeIndex === idx ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-200'}`}
                            >
                                <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>

                    {/* Main image area: magnifier on lg+ (external panel handled separately on lg, absolute on xl) */}
                    <div className="relative h-[370px] w-full bg-white overflow-visible flex items-center justify-center">
                        <ImageMagnifier
                            src={product.images[activeIndex]}
                            zoom={2}
                            lensSize={130}
                            onPositionChange={({ isHover, bgPos }) => {
                                setIsHovering(isHover);
                                setZoomBgPos(bgPos);
                            }}
                            className="w-full h-full"
                        />
                        {isHovering && (
                            <div
                                className="hidden xl:block absolute top-0 left-[calc(100%+35px)] border rounded-md bg-white shadow-lg z-10 w-[760px] h-[520px] 2xl:w-[900px] 2xl:h-[600px]"
                                style={{
                                    backgroundImage: `url(${product.images[activeIndex]})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: zoomBgPos,
                                    backgroundSize: `${externalZoom * 100}%`,
                                }}
                            />
                        )}
                    </div>

                    {/* Action buttons below (span all columns) */}
                    <div className="col-span-2 flex gap-2 mt-3">
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md shadow"
                        >
                            Add to Cart
                        </button>
                        <button
                            onClick={handleBuyNow}
                            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-md shadow"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* Right: Details (overlay zoom on lg inside this card) */}
                <div className="relative lg:col-span-7 xl:col-span-7 bg-white rounded-md border p-4 md:p-5 space-y-4">
                    {isHovering && (
                        <div
                            className="hidden lg:block xl:hidden absolute top-2 right-2 z-20 border rounded-md bg-white shadow-lg w-[520px] h-[360px] pointer-events-none"
                            style={{
                                backgroundImage: `url(${product.images[activeIndex]})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: zoomBgPos,
                                backgroundSize: `${externalZoom * 100}%`,
                            }}
                        />
                    )}
                    <div>
                        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">{product.brand} {product.name}</h1>
                        <div className="mt-1 flex items-center gap-2 text-sm">
                            <span className="px-2 py-[2px] rounded bg-green-600 text-white text-xs font-semibold">
                                {product.rating}★
                            </span>
                            <span className="text-gray-600">{product.reviews.toLocaleString()} Ratings & Reviews</span>
                        </div>
                    </div>

                    {/* Price block */}
                    <div className="space-x-2 flex items-end">
                        <span className="text-2xl font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                        <span className="text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                        <span className="text-green-600 font-semibold">{product.discountPercent}% off</span>
                    </div>

                    {/* Size selection */}
                    {product.sizes && product.sizes.length > 0 && (
                        <div>
                            <div className="mb-2 text-sm font-semibold text-gray-700">Select size</div>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setSelectedSize(s)}
                                        className={`px-3 py-2 rounded border text-sm ${
                                            selectedSize === s
                                                ? 'border-blue-600 text-blue-700 bg-blue-50'
                                                : 'border-gray-300 hover:border-gray-400'
                                        }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Highlights / Specs */}
                    {product.highlights && product.highlights.length > 0 && (
                        <div>
                            <div className="mb-2 text-sm font-semibold text-gray-700">Highlights</div>
                            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                {product.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Description */}
                    {product.description && (
                        <div>
                            <div className="mb-2 text-sm font-semibold text-gray-700">Description</div>
                            <p className="text-sm text-gray-700 leading-6">{product.description}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ProductDetails;
