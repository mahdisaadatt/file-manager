import ItemPreview from './ItemPreview';

const PropertyList = ({ properties, filters }) => {
  if (!properties) {
    return <p>چیزی پیدا نشد!</p>;
  }
  const renderedList = properties?.map((data, index) => {
    if (filters?.text) {
      if (!data?.title?.includes(filters?.text)) {
        return null;
      }
    }

    if (filters?.selectedProperty === 'all') {
      if (filters?.selectedStar) {
        if (filters?.selectedStar === 'all') {
          return <ItemPreview key={index} data={data} />;
        }
        if (!(data?.score === filters?.selectedStar)) {
          return null;
        }
      }
      return <ItemPreview key={index} data={data} />;
    }

    if (filters?.selectedProperty === 'home') {
      if (filters?.selectedHomeType) {
        if (filters?.selectedHomeType.value === 'all') {
          if (filters?.selectedStar) {
            if (filters?.selectedStar === 'all') {
              if (
                filters?.rooms?.includes(true) &&
                !filters?.rooms?.some((room, index) =>
                  room ? data?.rooms === index + 1 : null
                )
              ) {
                return null;
              }
              if (
                filters?.attributes?.some(attribute => attribute !== null) &&
                !filters?.attributes?.some(attribute =>
                  data?.attributes?.includes(attribute)
                )
              ) {
                return null;
              }
              if (filters?.meterage) {
                if (
                  !(
                    data?.meterage >= filters?.meterage[0] &&
                    data?.meterage <= filters?.meterage[1]
                  )
                ) {
                  return null;
                }
              }
            } else if (!(data?.score === filters?.selectedStar)) {
              return null;
            }
          }
          if (
            filters?.rooms?.includes(true) &&
            !filters?.rooms?.some((room, index) =>
              room ? data?.rooms === index + 1 : null
            )
          ) {
            return null;
          }
          if (
            filters?.attributes?.some(attribute => attribute !== null) &&
            !filters?.attributes?.some(attribute =>
              data?.attributes?.includes(attribute)
            )
          ) {
            return null;
          }
        } else if (!(filters?.selectedHomeType?.label === data?.homeType)) {
          return null;
        }
      }
    }

    if (filters?.selectedStar) {
      if (filters?.selectedStar === 'all') {
        if (filters?.selectedProperty === 'home') {
          if (filters?.meterage) {
            if (
              !(
                data?.meterage >= filters?.meterage[0] &&
                data?.meterage <= filters?.meterage[1]
              )
            ) {
              return null;
            }
          }
        }
        if (filters?.price && data?.price) {
          if (
            !(
              data?.price >= filters?.price[0] &&
              data?.price <= filters?.price[1]
            )
          ) {
            return null;
          }
        }
      } else if (!(data?.score === filters?.selectedStar)) {
        return null;
      }
    }
    if (filters?.selectedProperty === 'home') {
      if (filters?.convertable !== data?.convertable) {
        return null;
      }
      if (
        filters?.rooms?.includes(true) &&
        !filters?.rooms?.some((room, index) =>
          room ? data?.rooms === index + 1 : null
        )
      ) {
        return null;
      }
      if (
        filters?.attributes?.some(attribute => attribute !== null) &&
        !filters?.attributes?.some(attribute =>
          data?.attributes?.includes(attribute)
        )
      ) {
        return null;
      }
    }
    if (filters?.price && data?.price) {
      if (
        !(data?.price >= filters?.price[0] && data?.price <= filters?.price[1])
      ) {
        return null;
      }
    }
    if (filters?.mortgage && data?.mortgage) {
      if (
        !(
          data?.mortgage >= filters?.mortgage[0] &&
          data?.mortgage <= filters?.mortgage[1]
        )
      ) {
        return null;
      }
    }
    if (filters?.rent && data?.rent) {
      if (!(data?.rent >= filters?.rent[0] && data?.rent <= filters?.rent[1])) {
        return null;
      }
    }
    if (filters?.meterage) {
      if (
        !(
          data?.meterage >= filters?.meterage[0] &&
          data?.meterage <= filters?.meterage[1]
        )
      ) {
        return null;
      }
    }
    if (filters?.selectedProperty) {
      if (!(data?.type?.toLowerCase() === filters?.selectedProperty)) {
        return null;
      }
    }
    return <ItemPreview key={index} data={data} />;
  });
  return (
    <div className="grid tablet:grid-cols-2 w-full gap-8 my-4 rounded-lg">
      {!renderedList.length ? <p>هیچ دیتایی وجود نداره !</p> : renderedList}
    </div>
  );
};

export default PropertyList;
