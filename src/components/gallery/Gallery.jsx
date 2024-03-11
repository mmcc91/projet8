import data from "../../data/data.json";

const Gallery = () => {
  return (
    <div className="gallery">
      <Thumb key={data.id} id={data.id}
       title={data.title} 
       cover={data.cover} />
    </div>
  );
};

export default Gallery;
