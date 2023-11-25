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
    if (filters?.selectedProperty) {
      if (!(data?.type?.toLowerCase() === filters?.selectedProperty)) {
        return null;
      }
      if (filters?.selectedProperty === 'home' && filters?.selectedHomeType) {
        console.log(filters.selectedHomeType);
        console.log(data.homeType);
        if (!(filters?.selectedHomeType === data?.homeType?.toLowerCase())) {
          return null;
        }
      }
    }
    if (filters?.selectedStar) {
      if (!(data?.score === filters?.selectedStar)) {
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
