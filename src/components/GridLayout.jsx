import React from "react";
import sample from "../assets/img/avatars/avatar1.png";
import sample2 from "../assets/img/pet4.jpg";
import { Container, Row, Col, Card } from "react-bootstrap";
import useIntersectionObserver from "../js/useIntersectionObserver";


const GridLayout = () => {

  return (
    <Container className="hidden" ref={useIntersectionObserver("animate__zoomIn")}>
      <h3 className="text-center text-dark mb-5">
        Pet Rescue Centers we collaborate with
      </h3>
      <Row>
        <div className="grid-container">
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Paw Prints Rescue</h5>
              <h6 className="fw-light">Los Angeles, USA</h6>
            </div>
            <img
              src="https://www.hpmmag.com/wp-content/uploads/2016/02/BATTERSEA.jpg"
              alt=""
            />
          </div>
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Whisker Haven Shelter </h5>
              <h6 className="fw-light">Toronto, Canada</h6>
            </div>
            <img
              src="https://ncar.org.uk/wp-content/uploads/2023/05/mold-shop1.jpg"
              alt=""
            />
          </div>
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Tail Waggers Sanctuary</h5>
              <h6 className="fw-light">London, UK</h6>
            </div>
            <img
              src="https://imgs.search.brave.com/anIAu296HYoeBHpKMg6VhLOw7-SmhNupIsvVK_Asdk0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/dWlsZGluZ18xMTI3/LTMzNTcuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
              alt=""
            />
          </div>
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Furry Friends Adoption Center </h5>
              <h6 className="fw-light">Sydney, Australia</h6>
            </div>
            <img
              src="https://imgs.search.brave.com/trjgsji8rjhHQTC8LHP9B8KbzBmqXlYbXOnv_oG0dZk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDIzNjEzNDUtODll/NTgyNDdmMmQ1P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TWpCOGZHSjFh/V3hrYVc1bmZHVnVm/REI4ZkRCOGZId3c"
              alt=""
            />
          </div>
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Paws of Hope Rescue </h5>
              <h6 className="fw-light">Tokyo, Japan</h6>
            </div>
            <img
              src="https://imgs.search.brave.com/Vds2c_J1a-NNV7b9m2esm3axCVLo0GmYThw1Vl_IjeY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/ODc5NTg0NDk5NDMt/MjQyOWU4YmU4NjI1/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRsOGZH/SjFhV3hrYVc1bmZH/VnVmREI4ZkRCOGZI/d3c"
              alt=""
            />
          </div>
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Compassionate Critters Shelter</h5>
              <h6 className="fw-light">Paris, France</h6>
            </div>
            <img
              src="https://imgs.search.brave.com/uNC-PVOTT9fNtL2nGb1F6EyIFZy4LHih9KFN2oMJtZA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTA0NzgxMjU2NTUt/NTI3NjcxNzdjY2E5/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRoOGZI/TmhiaVV5TUdaeVlX/NWphWE5qYjN4bGJu/d3dmSHd3Zkh4OE1B/PT0"
              alt=""
            />
          </div>
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Second Chance Animal Sanctuary </h5>
              <h6 className="fw-light">Seoul, South Korea</h6>
            </div>
            <img
              src="https://imgs.search.brave.com/Y_032qP4Og-RMHAaspbVvqeXTUqdTW9L8ZQ5swTsV8E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9leHRlcmlvci12/aWV3LW1vZGVybi1p/bmR1c3RyaWFsLWJ1/aWxkaW5nXzc1Njc0/OC00NTI0OC5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw"
              alt=""
            />
          </div>
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Loving Hearts Animal Rescue </h5>
              <h6 className="fw-light">Cape Town, South Africa</h6>
            </div>
            <img
              src="https://imgs.search.brave.com/46tLG7HdxPcQX-bYxkNkdIDfYURctCF8_tVM5NMTuSc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTQ0MzU0OTMtOTM0/MjJlODIyMGM4P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRGOGZHSjFh/V3hrYVc1bmZHVnVm/REI4ZkRCOGZId3c"
              alt=""
            />
          </div>
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Rainbow Bridge Animal Refuge</h5>
              <h6 className="fw-light">Rainbow Bridge Animal Refuge</h6>
            </div>
            <img
              src="https://imgs.search.brave.com/-CEuLKlguzqwrqNcF_gEFwUafVHyD5Y1-FFBqxWOl3s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzLzA0MS9idWls/ZGluZy0xLTEyMzQ1/NjcuanBnP2ZtdA"
              alt=""
            />
          </div>
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Caring Paws Haven</h5>
              <h6 className="fw-light">Rio de Janeiro, Brazil</h6>
            </div>
            <img
              src="https://img.freepik.com/free-photo/shadows-made-by-daylight-city-with-architecture_23-2149451202.jpg?t=st=1717158249~exp=1717161849~hmac=dfd054aadde87bb33f30d610651cf9647287ca47cdd49907357ad258d3e19a7d&w=740"
              alt=""
            />
          </div>
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Purrfect Pals Shelter </h5>
              <h6 className="fw-light">Auckland, New Zealand</h6>
            </div>
            <img
              src="https://img.freepik.com/premium-photo/futuristic-skyscraper-reflects-blue-cityscape-modern-glass-facade-generated-by-artificial-intelligence_24911-102539.jpg?w=1380"
              alt=""
            />
          </div>
          <div className="grid-item">
            <div className="title">
              <h5 className="fw-light">Happy Tails Rescue</h5>
              <h6 className="fw-light">Vancouver, Canada</h6>
            </div>
            <img
              src="https://img.freepik.com/free-photo/front-view-modern-skyscrapers-office-buildings_23-2148836743.jpg?t=st=1717158751~exp=1717162351~hmac=2be69322ecf87da34898969e9efcb3d6aaecf2980eddc70766d4b873a8e38320&w=740"
              alt=""
            />
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default GridLayout;
