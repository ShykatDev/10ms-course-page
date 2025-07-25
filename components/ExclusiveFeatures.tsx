const FeatureItem = () => {
  return (
    <div className="flex">
      <div>
        <h2>ভিডিও লেকচার</h2>
        <div>
          icon
          <p>IELTS Academic ও General Training নিয়ে আলোচনা</p>
        </div>

        <div>
          icon
          <p>IELTS Academic ও General Training নিয়ে আলোচনা</p>
        </div>

        <div>
          icon
          <p>IELTS Academic ও General Training নিয়ে আলোচনা</p>
        </div>
      </div>
      image
    </div>
  );
};

const ExclusiveFeatures = () => {
  return (
    <div>
      <h1>Course Exclusive Feature</h1>

      <div>
        <FeatureItem />
        <FeatureItem />
        <FeatureItem />
      </div>
    </div>
  );
};

export default ExclusiveFeatures;
