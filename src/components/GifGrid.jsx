import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ category }) => {

  const {images, isLoading } = useFetchGifs(category);

  /* const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(()=> {
    getImages();
  }, []);
 */

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando..</h2>)
        
      }
      <div className="card-grid">
        {
          images.map( (image) => (
            <GifGridItem 
            key={image.id}
            {...image}//em vez de enviar el titulo y el url por separado
            />
          ))
        }
      </div>
    </>
  );
};
