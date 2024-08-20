import { User } from "lucide-react";

const commentsData = [
	{
		name: "Akash",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		replies: [
			{
				name: "Akash",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
				replies: [
					{
						name: "Akash",
						text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
					},
				],
			},
		],
	},
	{
		name: "John Doe",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		replies: [
			{
				name: "Akash",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
			},
		],
	},
	{
		name: "Jane Doe",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
		replies: [
			{
				name: "Akash",
				text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
			},
		],
	},
];

const CommentsList = ({ comments }) => {
    return comments?.map((comment) => (
      <div key={comment.name}>
        <Comment data={comment} />
        <div className="pl-5 border border-l-black ml-5">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    )) || null;
  };
  

const Comment = ({ data }) => {
	const { name, text, replies } = data;

	return (
		<div className="flex gap-2 shadow-sm bg-gray-100 p-2 rounded-md">
			<User className="w-10 h-10 rounded-full" />
			<div>
				<p className="font-bold">{name}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

const CommentsContainer = () => {
	return (
		<div className="px-5 py-2 w-full">
			<h1 className="text-2xl font-bold">Comments</h1>
			<CommentsList comments={commentsData} />
		</div>
	);
};

export default CommentsContainer;
