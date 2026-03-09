const Url = {
  allIssues: "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  singleIssue: (id) =>
    `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`,
  searchIssues: (searchText) =>
    `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`,
};

const labelBg = {
  "bug": "bg-pink-100 border-red-300 text-red-500",
  "enhancement": "bg-blue-100 border-blue-300 text-blue-500",
  "documentation": "bg-slate-100 border-slate-300 text-slate-500",
  "help wanted": "bg-yellow-100 border-yellow-300 text-yellow-500",
  "good first issue": "bg-green-100 border-green-300 text-green-500",
};




const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error. Status: ${response.status}`);
  }
  const json = await response.json();
  return json.data;
};

const loadAllData = async () => {
  try {
    const allIssues = await fetchData(Url.allIssues);
    renderIssues(allIssues);
  } catch (error) {
    console.error("Failed to load all issues:", error);
    
  }
};

const renderIssues = (issues) => {
  const container = document.getElementById("card-container");
  const issueStatus = document.getElementById("issue-status");
  const totalIssue = issues.length;

  issueStatus.innerText = `${totalIssue} ${totalIssue === 1 ? "Issue" : "Issues"}`;

  if (totalIssue === 0) {
    container.classList.remove("p-6");
    container.innerHTML = "";
    return;
  }

  container.classList.add("p-6");

  container.innerHTML = issues
    .map(
      (issue) => `
      <div
        onclick="renderModal(${issue.id})"
        class="card bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden border-t-4 ${
          issue.status === "open" ? "border-t-green-500" : "border-t-purple-500"
        } grid grid-rows-subgrid row-span-6 cursor-pointer"
      >
        <div class="card-body p-4 gap-2 grid grid-rows-subgrid row-span-6">

       
          <div class="flex items-center justify-between">
            ${
              issue.status === "open"
                ? '<img src="./assets/Open-Status.png" alt="Open status"/>'
                : '<img src="./assets/Closed- Status .png" alt="Closed status"/>'
            }
            <span class="badge badge-soft border font-semibold text-xs px-3 ${
              issue.priority === "high"
                ? "bg-red-100 border-red-400 text-red-600"
                : issue.priority === "medium"
                  ? "bg-yellow-50 border-yellow-400 text-yellow-600"
                  : "bg-gray-100 border-gray-400 text-gray-600"
            }">
              ${issue.priority.toUpperCase()}
            </span>
          </div>

    
          <h2 class="font-bold self-center text-black text-base">${issue.title}</h2>

  
          <p class="text-gray-400 text-sm line-clamp-2">${issue.description}</p>

   
          <div class="mt-2 flex self-center flex-wrap gap-2">
            ${issue.labels
              .map(
                (label) => `
              <span class="badge badge-soft border rounded-xl font-semibold text-xs ${
                labelBg[label] ?? "bg-gray-100 border-gray-400 text-gray-600"
              }">
                ${label.toUpperCase()}
              </span>
            `,
              )
              .join("")}
          </div>

          <hr class="mt-3 border border-gray-300 mb-3">
          <div class="self-center text-xs text-gray-400 flex justify-between gap-2">
            <div>
              <p>${issue.author ? `#${issue.id} by ${issue.author}` : ""}</p>
              <p>${issue.assignee ? `Assignee: ${issue.assignee}` : ""}</p>
            </div>
            <div class="text-right">
              <p>${issue.createdAt ? new Date(issue.createdAt).toLocaleDateString() : ""}</p>
              <p>${issue.updatedAt ? `Updated: ${new Date(issue.updatedAt).toLocaleDateString()}` : ""}</p>
            </div>
          </div>

        </div>
      </div>
    `,
    )
    .join("");

};




loadAllData();
