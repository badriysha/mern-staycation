import React from "react";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <div className="mb-3 font-weight-medium">{category.name}</div>
        <div className="container-grid">
          {category.items.length === 0 ? (
            <div className="row">
              <div className="col-auto align-item-center">
                There is no property in this category
              </div>
            </div>
          ) : (
            category.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">choice</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
