import Masonry from '../components/Masonry/Masonry';
import '../styles/MasonryExample.css';

const MasonryExample = () => {
    // Sample data - replace with your own images
    const items = [
        {
            id: 1,
            img: '/images/animal1.jpg',
            height: 800,
            url: '#'
        },
        {
            id: 2,
            img: '/images/animal2.jpg',
            height: 1200,
            url: '#'
        },
        {
            id: 3,
            img: '/images/animal3.jpg',
            height: 600,
            url: '#'
        },
        {
            id: 4,
            img: '/images/animal4.jpg',
            height: 900,
            url: '#'
        },
        {
            id: 5,
            img: '/images/animal5.jpg',
            height: 1000,
            url: '#'
        },
        {
            id: 6,
            img: '/images/animal6.jpg',
            height: 700,
            url: '#'
        },
        {
            id: 7,
            img: '/images/animal7.jpg',
            height: 850,
            url: '#'
        },
        {
            id: 8,
            img: '/images/animal8.jpg',
            height: 950,
            url: '#'
        },
        {
            id: 9,
            img: '/images/animal9.jpg',
            height: 1100,
            url: '#'
        },
        {
            id: 10,
            img: '/images/animal10.jpg',
            height: 750,
            url: '#'
        }
    ];

    return (
        <div className="masonry-example-container">
            <div className="masonry-header">
                <h1>서울어린이대공원 갤러리</h1>
                <p>아름다운 순간들을 만나보세요</p>
            </div>

            <div className="masonry-wrapper">
                <Masonry
                    items={items}
                    ease="power3.out"
                    duration={0.6}
                    stagger={0.05}
                    animateFrom="bottom" // 'top', 'bottom', 'left', 'right', 'center', 'random'
                    scaleOnHover={true}
                    hoverScale={0.95}
                    blurToFocus={true}
                    colorShiftOnHover={false}
                />
            </div>
        </div>
    );
};

export default MasonryExample;
