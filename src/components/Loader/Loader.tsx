import { DotLoader } from 'react-spinners'
import './Loader.scss';
import { useAppSelector } from '../../redux/hooks/hook';
const Loader = () => {
  const { isLoading } = useAppSelector((state) => state.LoaderSlice);

  return (
    <>
      {
        (isLoading) &&
        <div className="loader-overlay">
          <DotLoader color='#ACE1AF' loading={true} size={60} />
        </div>
      }
    </>
  )
}

export default Loader
