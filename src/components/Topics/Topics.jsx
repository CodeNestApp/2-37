import useFetch from "../../hooks/useFetch";
import Loading from "../Shared/Loading";
import AddTopic from "./AddTopic";
import TopicRow from "./TopicRow";

const Topics = () => {
  const { loading, data: topics, setData: setTopics } = useFetch("topics");

  if (loading) {
    return <Loading />;
  }

  const addTopicHandler = (topic) => {
    setTopics([...topics, topic]);
  };

  const sortedTopics = topics.sort((a, b) => {
    if (a.progress !== b.progress) return a.progress < b.progress ? 1 : -1;
    if (a.status == "Next") return -1;

    return 1;
  });

  return (
    <div className="container mx-auto py-5">
      {sortedTopics.map((topic) => (
        <TopicRow key={topic.id} {...topic} />
      ))}
      <div className="mt-10">
        <AddTopic onAdd={addTopicHandler} />
      </div>
    </div>
  );
};

export default Topics;
