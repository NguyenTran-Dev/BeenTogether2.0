import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const Post = (props) => {
  const { item } = props;
  return (
    <div>
      <Card className="my-2">
        <CardBody>
          <CardTitle>
            <h2>{item.title}</h2>
          </CardTitle>
          <CardText>{item.content}</CardText>
          <CardText>
            <small className="text-muted">{item.datetime}</small>
          </CardText>
        </CardBody>
        <CardImg
          alt="Card image cap"
          bottom
          src={item.img_url}
          width="100%"
        />
      </Card>
    </div>
  );
};

export default Post;
