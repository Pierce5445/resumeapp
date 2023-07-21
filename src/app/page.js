import styles from './styles.module.css' 
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div>
      <>
      {import('tailwindcss').Config}
  <link rel="stylesheet" href="sty" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
    integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
</>
<style
  dangerouslySetInnerHTML={{
    __html:
      "\n       \n       .two-column-list {\n            columns: 2;\n            column-gap: 20px; \n        }\n\n        \n        .two-column-list li {\n          list-style: none; \n            margin-bottom: 10px;\n        }\n  "
  }}
/>
      <>
      <div className={styles.body}>
      <div className={styles.wholeBody}>
      <div className={styles.container}>
  <div className={styles.left_Side}>
    <div className={styles.profileText}>
      <div className={styles.imgPB}>
        <Image
        priority
        width={300}
        height={300}
         src='/images/pierce.png' />
        
      </div>
      <h2>
        Pierce Benny
        <br />
        <span>Student</span>
      </h2>
    </div>
    <div className={styles.contactInfo}>
      <h3 className={styles.title}>Contact Information</h3>
      <ul className={styles.ul}> 
        <li className= {styles.li}>
          <span className={styles.icon}>
            <i className="fa fa-phone" aria-hidden="true" />
          </span>
          <span className="text">+1868 393-1105</span> 
        </li>
        <li>
          <span className={styles.icon}>
            <i className="fa fa-envelope" aria-hidden="true" />
          </span>
          <span className="text">piercebenny5445@gmail.com</span>
        </li>
        <li>
          <span className={styles.icon}>
            <i className="fa fa-map-marker" aria-hidden="true" />
          </span>
          <span className="text">San Fernando Trinidad and Tobago</span>
        </li>
      </ul>
    </div>
    <div className={styles.contactInfo }>
      <h3 className={styles.title}>Education</h3>
      
      <ul className={styles.ul}>
        <li className={styles.li}>
          <h5 className={styles.h5}>2020 - Current</h5>
          <h4 className={styles.h4}>Bachelor Degree in Electrical and Computer Engineering</h4>
          <h4 className={styles.h4}>The University of The West Indies</h4>
        </li>
        <li>
          <h5 className={styles.h5}>2018 - 2020</h5>
          <h4 className={styles.h4}>NETD in Electrical/Electronic Engineering</h4>
          <h4 className={styles.h4}>The University of Trinidad and Tobago</h4>
        </li>
        <li>
          <h5 className={styles.h5}>2013 - 2018</h5>
          <h4 className={styles.h4}>Sciences</h4>
          <h4 className={styles.h4}>ASJA Boys' College</h4>
        </li>
      </ul>
    </div>
  </div>
  <div className={styles.right_Side}>
    <div className={styles.about}>
      <h2 className={styles.title2}>Professional Summary</h2>
      <p />
      <li>
        Organized and dependable candidate successful at managing multiple
        priorities with a positive attitude. Willingness to take on added
        responsibilities to meet team goals.
      </li>
      <br />
      <li>
        Ambitious student pursuing a BSc in Electrical and Computer Engineering
        Degree eager to contribute developing knowledge in today's growing
        market.
      </li>
      <br />
      <li>
        Adaptable and driven with strong work ethic and discipline to thrive in
        team-based or individual settings.
      </li>
      <p />
    </div>
    <h2 className={styles.title2}>Skills</h2>
    <div className="two-column-list">
      <ul>
        <li>Team Building</li>
        <li>Leadership</li>
        <li>C++, Python and JavaScript</li>
        <li>MS Office</li>
        <li>Decision-making</li>
      </ul>
      <ul>
        <li>Collaboration</li>
        <li>Relationship Building</li>
        <li>Data Management</li>
        <li>Management Skills</li>
        <li>Customer Relations</li>
        <li>Active Listening</li>
        <li>HTML, CSS</li>
      </ul>
    </div>
    <br />
    <div className={styles.about}>
      <h2 className={styles.title2}>Work History</h2>
      <div className={styles.box}>
        <div className={styles.year_company}>
          <h5>12/2022 to 12/2022</h5>
          <h5>Massy Stores |<br></br> Marabella,<br></br>Trinidad and Tobago</h5>
        </div>
        <div className={styles.text}>
          <h4>BACKSTORE ATTENDANT</h4>
          <p />
          <li>
            Quickly learned new skills and applied them to daily tasks,
            improving efficiency and productivity
          </li>
          <p />
          <p />
          <li>
            Demonstrated respect, friendliness and willingness to help wherever
            needed.
          </li>
          <p />
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.year_company}>
          <h5>04/2021 to 02/2023</h5>
          <h5>FIXETHICS LIMITED | Chase Village, <br></br>Trinidad and Tobago</h5>
        </div>
        <div className="text">
          <h4>TECHNICIAN</h4>
          <p />
          <li>
            Executed diagnostics, troubleshooting and evaluations on Air
            Condition, Refrigeration and Electrical Services.
          </li>
          <p />
          <p />
          <li>
            {" "}
            Maintained quality assurance and customer satisfaction objectives
          </li>
          <p />
          <p />
          <li>Organized work to meet demanding production goals.</li>
          <p />
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

</>

      </div>
    </div>
  )
}
