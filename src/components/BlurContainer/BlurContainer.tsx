import "./BlurContainer.scss";
interface BlurContainerProps{
    image : string;
    id : string;  // unique id for the filter  //  eg: 'blur-filter-1'  'blur-filter-2'  'blur-filter-3'  etc.  //  'blur-filter-'+Math.random().toString(36).substr(2, 9)  for generating unique id on each render  //  'blur-filter-'+Date.now()  for generating unique id based on current timestamp  //
}

const BlurContainer = ({image, id} : BlurContainerProps) => {
    return (
        <div className="bookcard-image-blur-container">
            <svg className="bookcard-blur-image-svg">
                <filter id={id}>
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12"></feGaussianBlur>
                </filter>
                <image href={image} filter={`url(#${id})`} preserveAspectRatio="xMidYMid slice" />
            </svg>
        </div>
    )
}

export default BlurContainer
