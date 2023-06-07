import React from "react";
import useStyles from "./styles";
import team from "../../assets/team.jpg";

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>About Us</h1>
      <div className={classes.about}>
        <div className={classes.imgContainer}>
          <img src={team} alt="team" />
        </div>
        <div className={classes.textContainer}>
          <p>
            Welcome to our online store! We are a fashion-forward ecommerce
            website that specializes in providing high-quality clothing for both
            men and women. Our team is dedicated to curating a wide selection of
            clothing that is both stylish and affordable, so that our customers
            can look and feel their best without breaking the bank.
          </p>
          <p>
            At our online store, we believe that fashion is an art form, and
            that everyone deserves to express themselves through their clothing.
            That's why we offer a diverse range of styles and sizes to cater to
            all body types and personal preferences. Whether you're looking for
            casual wear, office attire, or something for a special occasion,
            we've got you covered.
          </p>
          <p>
            Our commitment to quality is reflected in everything we do, from the
            materials we use to the attention to detail in our designs. We work
            with some of the best manufacturers in the industry to ensure that
            every item we offer is made to the highest standards. Our team is
            constantly on the lookout for new and innovative designs, so that we
            can bring our customers the latest fashion trends.
          </p>
          <p>
            We understand that shopping for clothing online can be a daunting
            task, which is why we strive to make the process as easy and
            enjoyable as possible. Our website is user-friendly and features
            detailed product descriptions and sizing information to help you
            make an informed decision. We also offer fast and reliable shipping,
            and our customer service team is always available to answer any
            questions or concerns you may have.
          </p>
          <p>
            Thank you for choosing our online store for your fashion needs. We
            look forward to helping you express yours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
