import Location  from "/Users/maudcurticlement/projetopenclassroom/OpenClassroom/projet 8/src/data/donneeslocations.json";

const Gallery = () => {
    return (
      <div className="gallery">
        <Thumb locations={locations}/>
      </div>
    );
  };
  
  export default Gallery;