/**
 * @description: 日期格式化
 * @param {string} date
 * @return {*}
 */
export function formatDate(date: string | number | Date) {
	const currentDate = new Date();
	const inputDate = new Date(date);

	// 计算相差的时间（单位：毫秒）
	const timeDifference = currentDate.getTime() - inputDate.getTime();

	// 将时间差转换为分钟、小时和天数
	const minutes = Math.floor(timeDifference / (1000 * 60));
	const hours = Math.floor(timeDifference / (1000 * 60 * 60));
	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

	if (minutes < 60) {
		return `${minutes}分钟前`;
	} else if (hours < 24) {
		return `${hours}小时前`;
	} else if (days < 90) {
		return `${days}天前`;
	} else {
		return inputDate
			.toLocaleDateString("en-US", {
				year: "numeric",
				month: "numeric",
				day: "numeric",
			})
			.replace(/\//g, "-");
	}
}
