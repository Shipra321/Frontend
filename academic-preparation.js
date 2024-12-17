function summarizeDocument() {
    const fileInput = document.getElementById('upload-file');
    const summaryOutput = document.getElementById('summary-output');

    if (!fileInput.files.length) {
      summaryOutput.innerHTML = "<p style='color: red;'>Please upload a document to summarize!</p>";
      return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const content = e.target.result;
      // Simulate a summarization process (this is a placeholder)
      summaryOutput.innerHTML = "<h3>Document Summary:</h3><p>" + content.substring(0, 200) + "...</p>";
    };

    reader.readAsText(file);
  }

