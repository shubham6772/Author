import { memo } from "react";
import "./SkeletonLoader.scss";
import { Skeleton } from '@mui/material';

const SkeletonLoader = memo(() => {
    return (
        <div className='skeleton-loader-main-container'>
            <div className='skeleton-loader-image-container'>
                <Skeleton variant="rectangular" width={210} height={300} className='skeleton-loader-image' />
            </div>
            <div className='skeleton-loader-detail-container'>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={200} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={190} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={170} />
                <div className='skeleton-loader-price-container'>
                    <Skeleton variant="circular" width={40} height={40} className='skeleton-loader-price' />
                </div>
            </div>
        </div>
    )
})

export default SkeletonLoader
