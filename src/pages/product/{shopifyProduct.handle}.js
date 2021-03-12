import * as React from "react"
import { graphql } from "gatsby"
import Image from 'gatsby-image'
//import ProductView from "../../views/product-view"
import ProductForm from '../../components/productform/ProductForm'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  return (
    <>
      {/*<SEO title={product.title} description={product.description} />*/}
      <div>
        <div>
          <div>
            {product.images.map(image => (
              <Image
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
              />
            ))}
          </div>
          <div>
            <h1>{product.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage

export const query = graphql`
  query($id: String!) {
    shopifyProduct(id: { eq: $id }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`