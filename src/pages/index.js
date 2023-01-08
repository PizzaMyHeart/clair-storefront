import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import CollectionPreview from "../components/categories/collection-preview"
import ProductListItem from "../components/products/product-list-item"
import Grid from "../components/utility/grid"
import SearchEngineOptimization from "../components/utility/seo"
import { useCollections } from "../hooks/use-collections"

const IndexPage = ({ data }) => {
  const { products, collections } = data
  const prods = data.products.edges.map(edge => edge.node)
  const collectionPreviews = useCollections(collections, products)

  return (
    <div>
      <SearchEngineOptimization title="Home" />
      <div className="relative">
        <StaticImage
            src="../images/hero.png"
            alt="A ring on a wooden post"
            placeholder="tracedSVG"
            className="w-full h-auto"
          />
        <div className="absolute inset-x-1/3 bottom-16 hidden md:visible lg:grid lg:grid-rows-2">
          {/*<h1 className="text-4xl text-white">Clair London</h1>*/}
          <p className="mt-2 text-2xl font-header text-center text-white">
            Ethical and affordable jewellery
          </p>
          <button className="btn-ui mt-2 w-[8em] text-center justify-self-center" onClick={() => window.location.href = '/products'}>
            Shop now
          </button>
        </div>
      </div>
      <div className="pb-12 lg:pb-0 w-full px-4 sm:px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row items-center max-w-screen-2xl mx-auto">


        </div>
      </div>
      
      <div className="layout-base my-12 min-h-0">
        <Grid
          title={"Featured"}
          cta={{ to: "/products", text: "Browse all products" }}
        >
          {prods.slice(0, 4).map(p => {
            return <ProductListItem product={p} key={p.handle} />
          })}
        </Grid>
        <div className="mt-12">

          <Grid
            title="Shop by collection"
            cta={{ to: "/collections", text: "Browse all collections" }}
          >
            {collectionPreviews.slice(0, 4).map(collection => {
              return (
                <CollectionPreview
                  key={collection.id}
                  collection={collection}
                />
              )
            })}
          </Grid>
          <div className="mt-12 mb-12">
          <StaticImage
              src="../images/collection_header.png"
              alt="A necklace hanging from a Christmas tree"
              placeholder="tracedSVG"
              className="w-full h-auto"
            />
        </div>
        </div>
      </div>
    </div>
  )
}
export const query = graphql`
  query {
    products: allMedusaProducts {
      edges {
        node {
          handle
          title
          collection_id
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
          variants {
            prices {
              amount
              currency_code
            }
          }
        }
      }
    }
    collections: allMedusaCollections {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`

export default IndexPage
