import React from 'react'
import sm1 from '../img/home_img/sm1.jpg'
import sm2 from '../img/home_img/sm2.jpg'
import sm3 from '../img/home_img/sm3.jpg'
import fm1 from '../img/home_img/fm1.jpg'
import fm2 from '../img/home_img/fm2.jpg'
import fm3 from '../img/home_img/fm3.jpg'
import logo from '../img/logo.png'

export default function Home() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sm1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={sm2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={sm3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container">
                <div>
                    <div className="shadow  p-2 my-4 bg-light rounded"><h2 className='text-center'>Lorem ipsum dolor sit amet.</h2></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ab sequi eos dolores consequuntur hic perspiciatis ipsa commodi natus exercitationem! Eaque esse temporibus labore, libero, odit debitis aperiam id vel numquam, repellat dignissimos. Deserunt, error! Porro repellat beatae amet suscipit officiis nostrum explicabo dolorem quo ipsam atque facere delectus autem, laboriosam earum, nam laborum similique id totam quia. Aliquam exercitationem error architecto quis doloribus molestias, pariatur voluptas quod qui quasi. Ea, asperiores! Aliquam perspiciatis error accusantium nemo beatae dolorum facere totam labore, tempora hic ducimus, quia veritatis voluptate pariatur sint assumenda magnam, possimus molestias nesciunt laudantium architecto quis optio. Ab.</p>
                </div>
                <div >
                    <div className="shadow p-2 my-4 bg-light rounded"><h2 className='text-center'>Regular shadow</h2></div>

                    <div className='d-grid gap-5 d-sm-flex justify-content-sm-between justify-content-center'>

                        <img src={logo} className="rounded-circle" alt="..." width={250} height={250} />


                        <img src={logo} className="rounded-circle" alt="..." width={250} height={250} />


                        <img src={logo} className="rounded-circle" alt="..." width={250} height={250} />

                    </div>
                </div>
                <div>
                <div className="shadow p-2 my-4 bg-light rounded"><h2 className='text-center'>Feedback</h2></div>

                    <div id="carouselExampleSlidesOnly" style={{ maxWidth: "600px" }} className="carousel slide mx-auto" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card mb-3" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={fm1} className=" rounded-circle" alt="..." width={150} height={150} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card mb-3" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={fm2} className="rounded-circle" alt="..." width={150} height={150} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card mb-3" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={fm3} className="rounded-circle" alt="..." width={150} height={150} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


