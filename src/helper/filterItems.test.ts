import { removeFileExtension } from "./filterItems"

test("removeFileExtension удаление разшерение файла", () => {
  expect(removeFileExtension("test.png", 15)).toBe("test")
  expect(removeFileExtension("file.txt", 15)).toBe("file")
  expect(removeFileExtension("document.docx", 15)).toBe("document")
})
