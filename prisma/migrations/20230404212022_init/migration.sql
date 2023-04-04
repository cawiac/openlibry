-- CreateTable
CREATE TABLE "User" (
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "schoolGrade" TEXT,
    "schoolTeacherName" TEXT,
    "eMail" TEXT
);

-- CreateTable
CREATE TABLE "Book" (
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rentalStatus" TEXT NOT NULL DEFAULT 'available',
    "rentedDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" DATETIME,
    "renewalCount" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "author" TEXT NOT NULL,
    "topics" TEXT NOT NULL,
    "isbn" TEXT,
    "editionDescription" TEXT,
    "publisherLocation" TEXT,
    "pages" INTEGER,
    "summary" TEXT,
    "minPlayers" TEXT,
    "publisherName" TEXT,
    "otherPhysicalAttributes" TEXT,
    "supplierComent" TEXT,
    "publisherDate" TEXT,
    "size" INTEGER,
    "minAge" TEXT,
    "maxAge" TEXT,
    "additionalMaterial" TEXT,
    "price" REAL,
    "userId" INTEGER,
    CONSTRAINT "Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);