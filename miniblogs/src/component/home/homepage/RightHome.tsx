import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "antd";

const RightHome = () => {
  const [detail, setDetail] = useState<any>();
  const [product, setProduct] = useState<any>(null);
  useEffect(() => {
    axios
      .get("/products", {
        headers: {
          'Accept': "application/json",
          'apikey': "691c5597-e7d2-4c06-af49-f9369b367783",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      });
  }, []);

  const ListProduct = () => {
    return (
      product &&
      product.length !== 0 &&
      product.map((item: any) => {
        return (
          <div className="d-flex text-home" style={{ fontSize: "20px" }}>
            <img src={item.image} alt="" width="300" height="250" onClick={() => setDetail(item)}/>
            <div className="home">
              <h5>{item.title}</h5>
              <p className="text-s econdary">
                {item.time} | {item.category}
              </p>
              <p className="text-secondary">
                {item.description}
                 <button
                  onClick={() => setDetail(item)}
                  style={{color:"white",background:"#B2B1B1",border: '1px solid white',borderRadius: '5px', height:'50px', fontSize:'13pt'}}
                >
                  Read more
                </button>
              </p>
            </div>
          </div>
        );
      })
    );
  };
  const ListDetail = () => {
    return (
      <div>
        <Card
          style={{ width: 100 }}
          cover={
            <img alt="example" src={detail?.image} width="700" height="250" />
          }
        ></Card>
        <div className="d-flex text-home" style={{ fontSize: "20px" }}>
          <div className="">
            <h5> {detail?.description}</h5>
            <p className="text-s econdary">
              {detail?.time} | {detail?.category}
            </p>
            <p className="text-secondary">{detail?.description}</p>
            <p className="text-secondary">{detail?.context} </p>
          </div>
        </div>
          <button onClick={() => setDetail(undefined)} style={{color:"white",background:"#B2B1B1",border: '1px solid white',borderRadius: '5px', height:'50px', fontSize:'13pt'}}>
              All posts{" "}
          </button>
      </div>
    );
  };
  return <>{detail ? ListDetail() : ListProduct()}</>;

};

export default RightHome;
