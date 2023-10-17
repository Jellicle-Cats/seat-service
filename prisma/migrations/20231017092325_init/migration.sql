-- CreateTable
CREATE TABLE `Seat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isOpen` BOOLEAN NOT NULL DEFAULT true,
    `floor` INTEGER NOT NULL,
    `posX` INTEGER NOT NULL,
    `posY` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
