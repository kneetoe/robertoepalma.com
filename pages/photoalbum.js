import Image from 'next/image'
import React from 'react'
import styles from '/styles/PhotoAlbum.module.scss'


const photoalbum = () => {
  return (
    <div className={styles.pageContainer}>

      <div className={styles.tContainer}></div>

      <div className={styles.pictures}>


        <h1>My trips</h1>
        <h2>Nicaragua</h2>
        <div className={styles.imageCont}></div>

        <div className={styles.p1}>
          <div className={styles.cont1}>
            <div className={styles.imageCont}>
              <Image width={1521} height={1015}
                layout='responsive' src='/images/photos/p1/1.png'></Image>
            </div>
            <div className={styles.imageCont}>
              <div className={styles.imageCont}>
                <Image width={1521} height={1015}
                  layout='responsive' src='/images/photos/p1/2.png'></Image>
              </div>


            </div>

          </div>

          <div className={styles.cont1}>
            <div className={styles.imageCont}>
              <Image width={1521} height={1015}
                layout='responsive' src='/images/photos/p1/3.png'></Image>
            </div>
            <div className={styles.imageCont}>
              <div className={styles.imageCont}>
                <Image width={1521} height={1015}
                  layout='responsive' src='/images/photos/p1/4.png'></Image>
              </div>
            </div>

          </div>



        </div>

        <h2>Canada</h2>
        <div className={styles.p2}>

          <div className={styles.cont1}>
            <div className={styles.imageCont}>
              <Image width={508} height={758}
                layout='responsive' src='/images/photos/p2/1.png'></Image>
            </div>
            
            <div className={styles.imageCont}>
              <Image width={571} height={758}
                layout='responsive' src='/images/photos/p2/2.png'></Image>
            </div>

            <div className={styles.imageCont}>
              <Image width={433} height={758}
                layout='responsive' src='/images/photos/p2/3.png'></Image>
            </div>
            

          </div>

        </div>

        <h2>Greece</h2>
        <div className={styles.p3}>

        <div className={styles.cont1}>
            <div className={styles.imageCont}>
              <Image width={700} height={1110}
                layout='responsive' src='/images/photos/p3/1.png'></Image>
            </div>

        </div>

          <div className={styles.cont2}>
           
            
            <div className={styles.imageCont}>
              <Image width={807} height={532}
                layout='responsive' src='/images/photos/p3/2.png'></Image>
            </div>

            <div className={styles.imageCont}>
              <Image width={810} height={528}
                layout='responsive' src='/images/photos/p3/3.png'></Image>
            </div>
            

          </div>

        </div>

        <h2>Italy</h2>
        <div className={styles.p4}>

        

          <div className={styles.cont1}>
           
            
            <div className={styles.imageCont}>
              <Image width={762} height={521}
                layout='responsive' src='/images/photos/p4/1.png'></Image>
            </div>

            <div className={styles.imageCont}>
              <Image width={760} height={492}
                layout='responsive' src='/images/photos/p4/2.png'></Image>
            </div>
            

          </div>

          <div className={styles.cont2}>
            <div className={styles.imageCont}>
              <Image width={754} height={1047}
                layout='responsive' src='/images/photos/p4/3.png'></Image>
            </div>

        </div>

        </div>

        <h2>France</h2>
        <div className={styles.p5}>

        <div className={styles.cont1}>
            <div className={styles.imageCont}>
              <Image width={1236} height={761}
                layout='responsive' src='/images/photos/p5/1.png'></Image>
            </div>

          </div>

          <div className={styles.cont2}>
           
            
            <div className={styles.imageCont}>
              <Image width={743} height={653}
                layout='responsive' src='/images/photos/p5/2.png'></Image>
            </div>

            <div className={styles.imageCont}>
              <Image width={743} height={653}
                layout='responsive' src='/images/photos/p5/3.png'></Image>
            </div>
            

          </div>

         

        </div>

        <h2>Poland</h2>
        <div className={styles.p6}>
          <div className={styles.cont1}>
            <div className={styles.imageCont}>
              <Image width={749} height={1011}
                layout='responsive' src='/images/photos/p6/1.png'></Image>
            </div>
            <div className={styles.imageCont}>
                <Image width={765} height={1011}
                  layout='responsive' src='/images/photos/p6/2.png'></Image>
            </div>

          </div>

          <div className={styles.cont2}>
            <div className={styles.imageCont}>
              <Image width={1554} height={419}
                layout='responsive' src='/images/photos/p6/3.png'></Image>
            </div>

          </div>



        </div>

        <h2>Spain</h2>
        <div className={styles.p6}>
          <div className={styles.cont1}>
            <div className={styles.imageCont}>
              <Image width={744} height={663}
                layout='responsive' src='/images/photos/p7/1.png'></Image>
            </div>
            <div className={styles.imageCont}>
                <Image width={765} height={663}
                  layout='responsive' src='/images/photos/p7/2.png'></Image>
            </div>

          </div>

          <div className={styles.cont2}>
            <div className={styles.imageCont}>
              <Image width={1554} height={641}
                layout='responsive' src='/images/photos/p7/3.png'></Image>
            </div>

          </div>



        </div>


        <h2>Germany</h2>
        <div className={styles.p8}>

        

          <div className={styles.cont1}>
           
            
            <div className={styles.imageCont}>
              <Image width={887} height={629}
                layout='responsive' src='/images/photos/p8/1.png'></Image>
            </div>

            <div className={styles.imageCont}>
              <Image width={887} height={666}
                layout='responsive' src='/images/photos/p8/2.png'></Image>
            </div>
            

          </div>

          <div className={styles.cont2}>
            <div className={styles.imageCont}>
              <Image width={623} height={1342}
                layout='responsive' src='/images/photos/p8/3.png'></Image>
            </div>

        </div>

        </div>

        <h2>England</h2>
        <div className={styles.p9}>

        <div className={styles.cont1}>
            <div className={styles.imageCont}>
              <Image width={804} height={895}
                layout='responsive' src='/images/photos/p9/1.png'></Image>
            </div>

        </div>

          <div className={styles.cont2}>
           
            
            <div className={styles.imageCont}>
              <Image width={693} height={414}
                layout='responsive' src='/images/photos/p9/2.png'></Image>
            </div>

            <div className={styles.imageCont}>
              <Image width={693} height={448}
                layout='responsive' src='/images/photos/p9/3.png'></Image>
            </div>
            

          </div>

        </div>

        <h2>Mexico</h2>
        <div className={styles.p10}>

        <div className={styles.cont1}>
            <div className={styles.imageCont}>
              <Image width={859} height={1141}
                layout='responsive' src='/images/photos/p10/1.png'></Image>
            </div>

        </div>

          <div className={styles.cont2}>
           
            
            <div className={styles.imageCont}>
              <Image width={517} height={608}
                layout='responsive' src='/images/photos/p10/2.png'></Image>
            </div>

            <div className={styles.imageCont}>
              <Image width={517} height={481}
                layout='responsive' src='/images/photos/p10/3.png'></Image>
            </div>
            

          </div>

        </div>

      </div>







    </div>
  )
}

export default photoalbum