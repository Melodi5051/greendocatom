import { removeFileExtension } from "./filterItems"

test("removeFileExtension удаление разшерение файла", () => {
  expect(removeFileExtension("test.png")).toBe("test")
  expect(removeFileExtension("file.txt")).toBe("file")
  expect(removeFileExtension("document.docx")).toBe("document")
})
