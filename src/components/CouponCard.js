import React from "react";
import { Card, Button } from "react-bootstrap";

const CouponCard = ({ coupon, showBuy, handleBuy }) => {
  return (
    <Card className="my-4" bg="dark" text="white">
      <Card.Header>
        <Card.Text>
          <span>
            {coupon.title}
            <small style={{ float: "right" }}>
              {coupon.type.toUpperCase()}
            </small>
          </span>
        </Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Title>{coupon.code}</Card.Title>
        <Card.Text>{coupon.description}</Card.Text>
        <Card.Text>
          Expires On - {new Date(coupon.expiryDate).toDateString()}
        </Card.Text>
        <Card.Text>
          Posted By -{" "}
          {coupon.postedBy ? coupon.postedBy.name : "User from Asgard"}
        </Card.Text>
      </Card.Body>
      {showBuy && (
        <Card.Footer className="center-content">
          <Button
            variant="success"
            size="lg"
            className="buy_button"
            onClick={() => handleBuy(coupon._id)}
          >
            Buy
          </Button>
        </Card.Footer>
      )}
    </Card>
  );
};

export default CouponCard;
