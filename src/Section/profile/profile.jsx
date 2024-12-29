
import image from '../../assets/profile.jpg'
function ZoomableImage() {
 

  return (
    <section className='grid grid-cols-2 gap-2 bg-slate-500 p-2 mx-16
     max-md:grid-cols-1 max-md:mx-5 max-md:bg-slate-800'>
      <div  className=''>
      <img src={image} alt="profile Image" />
      </div>
      <div className='bg-slate-600 p-5 '>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quos enim inventore, sit porro, illo fugit aperiam sed soluta rem magnam doloremque ducimus nemo tempore totam dolor id ipsa corporis at itaque et numquam. At distinctio eius, facilis obcaecati odio sunt velit in, magnam alias nostrum et! Enim, alias amet.</p>
      </div>

    </section>
  );
}

export default ZoomableImage;