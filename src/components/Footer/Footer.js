import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import '../Footer/Footer.css';

export default function App() {
  return (
    <MDBFooter backgroundColor='' className='text-center text-lg-left bg-danger'>
      <MDBContainer className='p-4 '>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-warning'>About Us</h5>
            <p className="text-warning">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
                atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase text-warning'>Contributors</h5>

            <ul className='list-unstyled mb-0 text-left'>
              <li>
              <a href='https://github.com/Jasmin262' target="_blank" rel="noreferrer" className='text-warning text-left'>
              <i class="fab fa-github"></i>
                  Jasmin Mingers
                </a>
              </li>
              <li>
              <a href='https://github.com/ClemensDinkel' target="_blank" rel="noreferrer" className='text-warning text-left'>
              <i class="fab fa-github"></i>
                  Clemens Dinkel
                </a>
              </li>
              <li>
              <a href='https://github.com/bullgr-1926' target="_blank" rel="noreferrer" className='text-warning text-left'>
              <i class="fab fa-github"></i>
                  Ömer Ügür
                </a>
              </li>
              <li>
                <a href='https://github.com/bullgr-1926' target="_blank" rel="noreferrer" className='text-warning text-left'>
                <i class="fab fa-github"></i>
                  Stavros Temertzidis
                </a>
              </li>
              <li>
              <a href='https://github.com/jahanalem' target="_blank" rel="noreferrer" className='text-warning text-left'>
              <i class="fab fa-github"></i>
                  Said R. Allem
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3 text-warning' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright by{' '}
        <a className='text-warning' href='https://github.com/oemerueguer/pokefight_frontend'>
          Group 3
        </a>
      </div>
    </MDBFooter>
  );
}
